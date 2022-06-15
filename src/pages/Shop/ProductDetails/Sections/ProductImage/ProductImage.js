import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';

function ProductImage(props) {
    const [Images, setImages] = useState([])

    useEffect(() => {
        if (props.detail.imageUrl) {
            let images = [];
            images.push(
                {
                    original: props.detail.imageUrl,
                    thumbnail: props.detail.imageUrl,
                },
                {
                    original: props.detail.subImgLink1,
                    thumbnail: props.detail.subImgLink1,
                },
                {
                    original: props.detail.subImgLink2,
                    thumbnail: props.detail.subImgLink2,
                },
                {
                    original: props.detail.subImgLink3,
                    thumbnail: props.detail.subImgLink4,
                },
            )
            setImages(images)
        }
    }, [props.detail])

    return (
        <div>
            <ImageGallery items={Images} />
        </div>
    )
}

export default ProductImage
