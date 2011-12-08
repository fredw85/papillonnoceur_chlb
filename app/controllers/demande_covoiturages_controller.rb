# coding: utf-8
class DemandeCovoituragesController < ApplicationController
  def create
  	@demande_covoiturages = DemandeCovoiturage.all
  	@demande_covoiturage = DemandeCovoiturage.new(params[:demande_covoiturage])
  	if @demande_covoiturage.save
      respond_to do |format|
        format.html { redirect_to covoiturage_path, :flash => { :success => "Demande prise en compte!"} }
        format.js
      end
    else
      render 'pages/covoiturage'
    end
  end

  def destroy
  	DemandeCovoiturage.find(params[:id]).destroy
    @demande_covoiturages = DemandeCovoiturage.all
    respond_to do |format|
      format.html { redirect_to covoiturage_path, :flash => { :success => "Demande supprimée!" } }
      format.js
    end
  end

end
