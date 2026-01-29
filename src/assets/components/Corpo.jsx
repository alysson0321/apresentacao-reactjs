import urlimg from "../img/foto.jpeg";

function Corpo() {
  return (
    <main>
      <h2>Alysson Felipe</h2>
      <p>Desenvolvedor Full-Stack</p>
      <img className="foto" src={urlimg} alt="Foto de Alysson Felipe" />
      <h2>Contatos</h2>
      <ol>
        {" "}
        <li>
          <a
            href="https://www.linkedin.com/in/alyssonfelipe0321/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/alysson0321" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/alysson_felipe0/" target="_blank">
            Instagram
          </a>
        </li>
      </ol>
      <h2>Habilidades</h2>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
      </ol>

      <h2>Resumo</h2>
      <p
        style={{
          textAlign: "justify",
          marginLeft: "40px",
          marginRight: "40px",
          marginBottom: "20px",
        }}
      >
        Desenvolvedor Full-Stack | Técnico em Informática (IFPE) Sou um
        desenvolvedor apaixonado por transformar problemas reais em software
        funcional e eficiente. Técnico em Informática formado pelo IFPE, possuo
        uma visão completa do ciclo de desenvolvimento de software, atuando com
        desenvoltura tanto no Back-end (Node.js, Express, PostgreSQL) quanto no
        Front-end (React, HTML, CSS). Com habilidades sólidas em JavaScript,
        estou sempre em busca de aprimorar minhas competências e aprender novas
        tecnologias para entregar soluções inovadoras.
      </p>
    </main>
  );
}

export default Corpo;
