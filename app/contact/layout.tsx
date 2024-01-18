export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="sm:ml-12 items-center justify-center ">
      {/* <div className="inline-block max-w-lg text-center justify-center"> */}
      {children}
      {/* </div> */}
    </section>
  );
}
