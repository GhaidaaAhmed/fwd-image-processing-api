# fwd-image-processing-api

You can resize an exist image found in the folder assets/images/full using Sharp
/api/images?image={image_name}&width={width_value}&height={height_value}
this will return an image resized with given height and width and saved to assets/images/thumb

example:
http://localhost:3000/api/images?image=fjord.jpg&width=204&height=200
will return image fjord resized with width 204 and height 200
