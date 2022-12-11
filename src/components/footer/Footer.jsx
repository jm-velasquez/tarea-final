import React from "react";

import estilos from "../../style/Footer/footer.module.css";

export default function Footer() {
  return (
    <nav className={estilos.containerFooter}>
      <div className='text-center p-4'>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='/'>
          Curso de Front End
        </a>
      </div>
    </nav>
  );
}
