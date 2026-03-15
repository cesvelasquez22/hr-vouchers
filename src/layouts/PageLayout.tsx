import type React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

function PageLayout(props: React.PropsWithChildren<Props>) {
  return (
    <main className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4 ">{props.title}</h1>
      {props.children}
    </main>
  );
}

export default PageLayout;
