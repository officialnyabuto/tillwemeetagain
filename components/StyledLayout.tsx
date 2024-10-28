"use client";

export default function StyledLayout({ 
  children, 
  playfairFont 
}: { 
  children: React.ReactNode;
  playfairFont: string;
}) {
  return (
    <>
      <style jsx global>{`
        h1, h2, h3, h4, h5, h6 {
          font-family: ${playfairFont};
        }
      `}</style>
      {children}
    </>
  );
}