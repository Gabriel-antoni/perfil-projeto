import React, { Component } from "react";
import ReactDOm from "react-dom";
import "./perfil.css";

export default class Perfil extends Component {
  render() {
    return (
      <div className="conteiner">
        <div className="box">
          <div className="texto">
            <h2>Olá, Sou Iara Maria.</h2>
            <p>
              {" "}
              Desenvolvedora front-end Jr. sejam todox bem vindxs ao meu blog.
            </p>

            <a target="_black" href="https://github.com/iarawatson2">
              <button>Portifólio</button>
            </a>
          </div>
          <div className="imagem">
            <img
              id="foto"
              src="https://www.endoclinjaciara.com.br/imgs_equipe/201405am104135.jpg"
            />
          </div>
        </div>
        <div id="servicos">
          <div class="box1-2-3">
            <div class="servico-box servico-box-1">
              <h2 class="servico-box-h2">Serviços</h2>
            </div>
            <div class="servico-box servico-box-2">
              <p class="servico2-paragrafo">
                "Experiência em multiplos setores jurísicos com foco nas várias
                soluções do meio trabalhista."
              </p>
              <button class="servico2-button">Contato</button>
            </div>
            <div class="servico-box servico-box-3"></div>

            <div class="servico-box servico-box-4">
              <h3 class="servico-box-titulo">
                Análise e elaboração de contratos
              </h3>
            </div>

            <div class="servico-box servico-box-5"></div>
            <h3 class="servico-box-titulo">Auditoria</h3>
          </div>

          <div class="servico-box servico-box-6">
            <h3 class="servico-box-titulo">Consultoria</h3>
          </div>

          <div class="servico-box servico-box-7">
            <h3 class="servico-box-titulo">Treinamentos</h3>
          </div>

          <div class="servico-box servico-box-8">
            <h3 class="servico-box-titulo">Recuperação de crédito</h3>
          </div>
        </div>
      </div>
    );
  }
}
