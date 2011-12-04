# coding: utf-8
class PropositionCovoituragesController < ApplicationController
  def create
  	@proposition_covoiturage = PropositionCovoiturage.new(params[:proposition_covoiturage])
  	if @proposition_covoiturage.save
      flash[:success] = "Proposition prise en compte!"
      @proposition_covoiturages = PropositionCovoiturage.all
      respond_to do |format|
        format.html { redirect_to covoiturage_path }
        format.js
      end
    else
      render 'pages/accueil'
    end
  end

  def update
  	
  end

  def destroy
  	PropositionCovoiturage.find(params[:id]).destroy
  	flash[:success] = "Proposition supprimée!" 
    @proposition_covoiturages = PropositionCovoiturage.all
    respond_to do |format|
      format.html { redirect_to covoiturage_path }
      format.js
    end
  end

end
