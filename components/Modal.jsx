import Link from "next/link";
import Image from "next/image";

export default function Modal({ member, handleClose, handleNext, handlePrev}) {
  return (
    <dialog id="modal-member" open>
      <article>
        <a href="#close"
          aria-label="Close"
          className="close"
          data-target="modal-member"
          onClick={handleClose}
          style={{
            marginBottom: "0"
          }}
        ></a>
        <hgroup>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <h2 style={{ marginBottom: "20px" }}>
              <Link href={member.name}>{member.name}</Link>
            </h2>
            <Image 
              width={200}
              height={200}
              style={{
                maxHeight: "200px",
                padding: "10px",
                marginBottom: "var(--typography-spacing-vertical)"
              }}
              src={`/images/${member.slug}.png`}
              alt={member.name} />
          </div>
          <p>{member.bio}</p>
        </hgroup>
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
          <a role="button" href="#" className="outline" onClick={() => handlePrev()}> Prev </a>
          <a role="button" href="#" className="outline" onClick={() => handleNext()}> Next </a>
        </div>
      </article>
    </dialog>
  )
}