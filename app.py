from flask import Flask, request, jsonify
from pysrc.src.collaborative_recommender import recommendFor

app = Flask(__name__)

@app.route('/recommend', methods=['GET'])
def recommend():
    book_name = request.args.get('book_name', default = '', type = str)
    top = request.args.get('top', default = 5, type = int)
    recommendations = recommendFor(book_name, top)
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)

    
    """
    const RecommendButton = () => {
  const [recommendations, setRecommendations] = useState([]);

  const handleClick = () => {
    const book_name = event.target.value; // Replace with the actual book name
    const top = 5; // Replace with the actual number of recommendations

    fetch(
      `http://localhost:5000/recommend?book_name=${encodeURIComponent(
        book_name
      )}&top=${top}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecommendations(data);
      });
  };

  return (
    <div>
      <button style={{ position: "fixed", top: 0 }} onClick={handleClick}>
        Recommend
      </button>
      {(recommendations as Book[]).map((recommendation, index) => (
        <div key={index}>
          <h2>{recommendation.bookTitle}</h2>
          <p>{recommendation.bookAuthor}</p>
          <img src={recommendation.imageUrlM} alt={recommendation.bookTitle} />
        </div>
      ))}
    </div>
  );
};

export { RecommendButton };"""