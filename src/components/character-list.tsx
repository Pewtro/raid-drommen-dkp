import { useSession } from 'next-auth/react';
import type { JSX, SVGProps } from 'react';
import { CharacterListData } from './character-list-data';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

export function CharacterList() {
  const { data } = useSession();

  return (
    <div className="mx-auto my-8 self-start">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <UsersIcon className="h-8 w-8" />
          <CardTitle>My Characters</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {data ? <CharacterListData /> : <p className="p-4">Please sign in to view your characters</p>}
        </CardContent>
      </Card>
    </div>
  );
}

function UsersIcon(properties: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...properties}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
