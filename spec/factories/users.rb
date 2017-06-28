FactoryGirl.define do

	factory :user do
		name     { Faker::Name.first_name }
    	#email    { Faker::Internet.email }
    	email    "binay18.shah@gmail.com"
    	password "12345"
    	phone 	 {Faker::PhoneNumber.cell_phone}
	end
end