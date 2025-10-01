import React from 'react'
import style from './Buscador.module.css'
export default function Buscador(){
  return (
    <div className="d-flex justify-content-center mt-3">
        <div class={`input-group ${style.barraBuscador}`}>
            <span className="input-group-text bg-transparent border-0" id="visible-addon">
                <i class="bi bi-search"/>
            </span>
            <input type="text" className="form-control border-0 bg-transparent" placeholder="Buscar productos..." aria-label="Buscar productos" aria-describedby="visible-addon" />
        </div>
    </div>
  );
}
