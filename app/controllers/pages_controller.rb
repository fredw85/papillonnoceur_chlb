# coding: utf-8

class PagesController < ApplicationController
  def accueil
    @title = "Infos pratiques"
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
    @demande_covoiturages = DemandeCovoiturage.all
    @demande_covoiturage = DemandeCovoiturage.new
  end

  def logement
    @title = "Logement"
  end

  def liste
    @title = "Liste"
  end

end
