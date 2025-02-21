import "../styles/notFound.scss";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <a href="/">Retourner sur la page d’accueil</a>
    </div>
    

  );
};

export default NotFound;
