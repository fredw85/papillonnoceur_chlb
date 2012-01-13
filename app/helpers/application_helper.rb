# coding: utf-8

module ApplicationHelper
	def title
		base_title = "Mariage de Marie-Caroline et Charles-Hubert"
		if @title.nil?
			base_title
		else
			"#{base_title} | #{@title}"
		end
	end
end
