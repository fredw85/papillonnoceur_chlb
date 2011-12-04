# coding: utf-8
class PropositionCovoituragesController < ApplicationController
  def create
    @proposition_covoiturages = PropositionCovoiturage.all
  	@proposition_covoiturage = PropositionCovoiturage.new(params[:proposition_covoiturage])
  	if @proposition_covoiturage.save
      respond_to do |format|
        format.html { redirect_to covoiturage_path, :flash => { :success => "Proposition prise en compte!"} }
        format.js
      end
    else
      render 'pages/covoiturage'
    end
  end

  def update
  	
  end

  def destroy
  	PropositionCovoiturage.find(params[:id]).destroy
    @proposition_covoiturages = PropositionCovoiturage.all
    respond_to do |format|
      format.html { redirect_to covoiturage_path, :flash => { :success => "Proposition supprimée!" } }
      format.js
    end
  end

end
