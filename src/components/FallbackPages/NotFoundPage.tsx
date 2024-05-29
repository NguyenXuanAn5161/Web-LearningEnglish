import notFound from "../../assets/not-found.jpg";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className={`nfp_container`}>
      <img src={notFound} alt="not found page" className={`nfp_image`} />
      <h1>404</h1>
      <p>Sorry, the page you visited does not exist.</p>
      <button>Back Home</button>
    </div>
  );
};

export default NotFoundPage;
