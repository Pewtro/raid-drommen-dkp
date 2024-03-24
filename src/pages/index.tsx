import Head from 'next/head';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { CharacterList } from '~/components/character-list';
import { ModeToggle } from '~/components/theme-toggle';
import { Button } from '~/components/ui/button';
import { api } from '~/utils/api';

export default function Home() {
  const { data } = useSession();
  const hello = api.example.hello.useQuery({ text: 'from tRPC' });

  return (
    <>
      <Head>
        <title>Raid Drømmen DKP</title>
        <meta name="description" content="Raid Drømmen DKP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex items-center justify-end p-4">
        <ModeToggle />
        <Button variant="outline" size="default" onClick={() => void (data ? signOut() : signIn())} className="ml-2">
          <p className="mr-2">{data ? 'Sign out' : 'Sign in'}</p>
          {data?.user.image && (
            <Image src={data.user.image} alt="Profile picture" width={24} height={24} className="rounded-full" />
          )}
        </Button>
      </nav>
      <main className="flex min-h-screen flex-col">
        <p className="text-5xl font-bold">Raid Drømmen DKP</p>
        {data && <p className="text-3xl font-bold">Velkommen {data.user.name} </p>}
        {hello.data ? hello.data.greeting : 'Loading tRPC query...'}
        <div className="grid grid-cols-3 gap-4">
          <CharacterList />
        </div>
      </main>
    </>
  );
}
