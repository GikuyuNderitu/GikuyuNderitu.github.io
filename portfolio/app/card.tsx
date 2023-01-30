type CardProps = {
  title: string
  children?: React.ReactNode
}
export default function Card({ title, children }: CardProps) {
  return <div
    className="text-xl pt-4 border-black dark:border-white border-2
        rounded min-w-[150px] max-w-[350px]">
    <h3 className="text-black dark:text-white">{title}</h3>
    {children}
  </div>
}