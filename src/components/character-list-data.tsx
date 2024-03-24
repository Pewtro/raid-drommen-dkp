import { api } from '~/utils/api';
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from './ui/table';

export function CharacterListData() {
  const { data, isLoading } = api.character.getAllCharacters.useQuery();

  if (isLoading) {
    return <p className="p-4">Loading...</p>;
  }
  if (!data) {
    return <p className="p-4">Error loading characters</p>;
  }

  const characters = data.characters;

  if (characters.length === 0) {
    return <p className="p-4">No characters found</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-10">#</TableHead>
          <TableHead>Character</TableHead>
          <TableHead>Kill Points</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {characters.map((character, index) => (
          <TableRow key={`character-${index + 1}`}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
              <div className="font-semibold">{character.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{character.class}</div>
            </TableCell>
            <TableCell>0</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
