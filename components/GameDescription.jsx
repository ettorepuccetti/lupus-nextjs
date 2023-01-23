import { useState } from "react";

export default function GameDescription () {

  const readMoreLabel = "Read more";
  const readLessLabel = "Read less";

  let dots;
  let moreText;
  let readMoreButton;

  if (typeof window !== "undefined" ) {
    dots = document.getElementById("dots");
    moreText = document.getElementById("more");
    readMoreButton = document.getElementById("readMore");
  }

  let [collapsed, setCollapsed] = useState(true);

  function readMore() {
    setCollapsed(!collapsed);
    dots.style.display = collapsed ? "none" : "inline";
    readMoreButton.innerHTML = collapsed ? readLessLabel : readMoreLabel;
    readMoreButton.style.display = collapsed ? "block" : "inline";
    moreText.style.display = collapsed ? "inline" : "none";
  }

  return (
    <p> 
        All&apos;interno del gioco, si scontreranno due principali fazioni: i lupi mannari e i contadini. Lo scopo dei Lupi Mannari consiste nell&apos;eliminare tutti gli Umani, mentre gli Umani devono linciare tutti i Lupi Mannari. 
      <span id="dots">..&nbsp;</span>
      <span id="more" style={{display: "none"}}>
        <br/>
          Il gioco si articola in due fasi: il giorno e la notte. Nella fase notturna, mentre tutti i giocatori chiudono gli occhi e battono ritmicamente colpi sul tavolo con le mani, i Lupi Mannari decidono il personaggio da sbranare e lo indicano al moderatore. Questi chiamerà a turno tutti i personaggi che hanno possibilità di fare delle attività notturne e, alla fine, decreterà la fine della Notte. Nella fase diurna, dopo che i giocatori hanno aperto gli occhi, il moderatore indica il personaggio che è stato sbranato, diventando un Fantasma, oppure comunica che i Lupi Mannari sono andati a vuoto, grazie all&apos;intervento della Guardia del Corpo. A seguito di questo annuncio, gli abitanti del villaggio inizieranno a parlare tra di loro, cercando di intuire l&apos;identità dei Lupi Mannari. Il moderatore chiederà ai giocatori di votare per il personaggio che ritengono sia un lupo mannaro, e il personaggio con più voti sarà linciato. Il gioco prosegue così fino a quando non rimarranno solo gli Umani o i Lupi Mannari.
      </span>
      <span> 
        <a
          id="readMore"
          onClick={() => readMore()}
        > {readMoreLabel} </a>
      </span>
    </p>
  )
}