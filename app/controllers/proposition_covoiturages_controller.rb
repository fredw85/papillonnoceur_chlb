class PropositionCovoituragesController < ApplicationController
  def create
  	@proposition_covoiturage = PropositionCovoiturage.new(params[:proposition_covoiturage])
  	if @proposition_covoiturage.save
      flash[:success] = "Proposition prise en compte!"
      redirect_to proposition_covoiturages_path
    else
      render 'pages/covoiturage'
    end
  end

  def index
  	@proposition_covoiturages = PropositionCovoiturage.all
  	@proposition_covoiturage = PropositionCovoiturage.new
  end

  def destroy
  end

end
