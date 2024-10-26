interface HeadingProps {
  title: string;
  subtitle: string;
}

 function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="mx-auto mt-20 max-w-4xl text-center">
      <h2 className="text-base font-semibold leading-7 text-indigo-600">{title}</h2>
      <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
        {subtitle}
      </p>
    </div>
  )
}

export default Heading;