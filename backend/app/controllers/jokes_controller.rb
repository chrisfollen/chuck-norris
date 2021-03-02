class JokesController < ApplicationController

    def index 
        @jokes = Joke.all 
        render json: @jokes 
    end

    def show
        @joke = Joke.find(params[:id])
        render json: @joke 
    end

    def create 
        @joke = Joke.create(
            joke: params[:joke],
            category: params[:category]
        )

        redirect_to 'http://localhost:3001/'

    end
end
