

export default function Card({label,value}) {
    console.log(label,value)
  return (
    <div className="w-8 h-8 rounded-md p-4 flex gap-2">
        <h3>{label}</h3>
        <p>{value}</p>
    </div>
  )
}