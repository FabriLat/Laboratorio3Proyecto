import PropTypes from "prop-types";
const BookItem = ({ title, author, raiting, pages }) => {
  return (
    <>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <div>{raiting?.length} estrellas</div>
      <p>{pages} páginas</p>
    </>
  );
};

export default BookItem;

BookItem.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    raiting: PropTypes.array
}
