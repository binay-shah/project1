class AdsWS
	include HTTParty
	base_uri "http://localhost:3000/api/ads"
	format :json


	def self.getAd
		get("/1")
	end

	def self.adPost
		response = post("", body: { :id=>35, :title => "test adPost", :price => "2000", :user_id => "2", :details => "", :description=> "good House", :brand_id=> "", :category_id=> 13, :location_id=>6, :images=> [{:position=> 1, :image=>  "/Users/binay/Desktop/images/car1.jpg"}, {:position=> 2, :image=> "/Users/binay/Desktop/images/car1.jpg"} ] }.to_json, :headers => { 'Content-Type' => 'application/json' })
		#response = post("", body: { :id=>12, :title=> "House", :price=> "2000", :details=> "", :description=> "good House", :brand_id=>"", :category_id =>13, :location_id=>6}.to_json, :headers => { 'Content-Type' => 'application/json' })
		case response.code
		  when 400
		    puts "Bad request"
		  when 404
		    puts "O noes not found!"
		  when 500...600
		    puts "ZOMG ERROR #{response.code}"

		end
	end
end