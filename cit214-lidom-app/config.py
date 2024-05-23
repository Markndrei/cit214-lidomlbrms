from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    backend_name: str = "book-recommender-api"
    backend_port: int = 5000
    backend_host: str = "127.0.0.1"
