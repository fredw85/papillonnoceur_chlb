# coding: utf-8
class DemandeCovoiturage < ActiveRecord::Base
	attr_accessible :depart, :name, :email, :telephone

	email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

	validates :depart, 	:presence => true,
						:length => { :maximum => 30 }

	validates :name, 	:presence => true,
						:length => { :maximum => 30 }

	validates :email, 	:presence => true,
						:format => { :with => email_regex },
						:uniqueness => { :case_sensitive => false },
						:unless => Proc.new {|obj| obj.email.blank? && !obj.telephone.blank?}

	validates :telephone, 	:presence => true,
							:length => { :in => 9..15 },
							:unless => Proc.new {|obj| obj.telephone.blank? && !obj.email.blank?}
end
