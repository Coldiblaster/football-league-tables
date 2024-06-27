import Link from 'next/link';

import { Heading } from '@/components/Typography';
import { Button } from '@/components/button';

export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden bg-primary-medium">
      <Heading variant="primary" as="h2">
        Página não encontrada
      </Heading>
      <Link href="/">
        <Button variant="primary" className="w-[240px]">
          Voltar a home
        </Button>
      </Link>
    </div>
  );
}
