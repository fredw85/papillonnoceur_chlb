# coding: utf-8

class PagesController < ApplicationController
  def accueil
    @title = "Infos pratiques"
    @messe = "Messe à 15h à l'Eglise de Brives-La-Gaillarde"
    @reception = "Reception à 17h au château de Chambord"
  end

  def presentation
    @title = "Présentation"
  end

  def trajet
    @title = "Trajet"
  end

  def covoiturage
    @title = "Covoiturage"
    @proposition_covoiturages = PropositionCovoiturage.all
    @proposition_covoiturage = PropositionCovoiturage.new
  end

  def logement
    @title = "Logement"
  end

  def liste
    @title = "Liste"
  end

end
