# coding: utf-8

class PagesController < ApplicationController
  def accueil
    @messe = "Messe à 15h à l'Eglise de Brives-La-Gaillarde"
    @reception = "Reception à 17h au château de Chambord"
  end

  def presentation
  end

  def trajet
  end

  def covoiturage
  end

  def logement
  end

  def liste
  end

  def photos
  end

end
