# coding: utf-8
class PropositionCovoiturage < ActiveRecord::Base
	attr_accessible :depart, :places, :name, :email, :telephone

	email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

	validates :depart, 	:presence => true

	validates :places,	:presence => true,
						:numericality => { 	:only_integer => true,
											:greater_than => 1,
											:lower_than => 7}

	validates :name, 	:presence => true,
						:length => { :maximum => 50 }

	validates :email, 	:presence => true,
						:format => { :with => email_regex },
						:uniqueness => { :case_sensitive => false },
						:unless => Proc.new {|obj| obj.email.blank? && !obj.telephone.blank?}

	validates :telephone, 	:presence => true,
							:length => { :in => 9..15 },
							:unless => Proc.new {|obj| obj.telephone.blank? && !obj.email.blank?}

end
