import pickle
import pandas as pd

popularity_df =pd.read_pickle("C:/Users/Mark Andrei Encanto/Downloads/models-20240523T143754Z-001/models/popular.pkl")
MAX_RECOMMENDATIONS = popularity_df.shape[0]


def popular_books_top(top: int):
    """
    Return the top popular books.
    param
        - top: number of books to return
    """
    if top > MAX_RECOMMENDATIONS:
        top = MAX_RECOMMENDATIONS
    elif top < 0:
        top = 0
    df = popularity_df[["Book-Title", "Book-Author", "Image-URL-M"]]
    return df.head(top).to_dict(orient="records")
