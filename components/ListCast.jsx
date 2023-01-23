import Image from "next/image"

export default function ListCast({cast, onChoice}) {

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))",
      gap: "1rem",
      marginBottom: "1rem"
    }}>
      { 
        cast.map(member => (
          <a
            key={member.id} 
            onClick={() => onChoice(member)}
            style={{placeSelf: "center"}}
            data-tooltip={member.name}
          >
            <Image
              width={175}
              height={175}
              className='container'
              src={`/images/${member.slug}-small.jpg`} 
              alt={member.name}
              style={{borderRadius: "10%", padding:0}}
            />
          </a>
        ))
      }
    </div>
  )
}