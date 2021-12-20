import React from 'react'
import classnames from 'classnames'
import BlogItem from './components/BlogItem'
import BarTitle from '../BarTitle'
import BlogImg from './components/BlogImg'
import BlogTag from "./components/BlogTag"
import BlogTitle from "./components/BlogTitle"
import BlogDate from "./components/BlogDate"
import "./style.scss"
import meo from "../../assets/img/meo.jpg"
import Avatar from '../Avatar'
export default function BlogPost({ size }) {
    return (
        <section className="blog__post">
            <div className="container">


                <BarTitle title="Read our Blog posts" />
                <div className="blog__item-list">

                    <BlogItem size="large" >
                        <BlogImg size="large" href={meo} >
                        </BlogImg>
                        <div className="blog__img-tag">
                            <BlogTag tag="Dinner tips" />
                        </div>
                        <div className="blog__large-bottom">
                            <BlogTitle size="large"
                                title="Our chef tips for a great and tasty dinner ready in 20 minutes" />
                            <div className="bottom__large">
                                <Avatar size="small" href={meo} />
                                <BlogDate color="white" name="Author" date="17. 6. 2020" />
                            </div>
                        </div>


                    </BlogItem>
                    <BlogItem size="small" >
                        <BlogImg size="middle" href={meo} >

                        </BlogImg>
                        <div className="blog__small-bottom">
                            <BlogTag tag="Vegetable" />
                            <BlogTitle size="middle" title="Which vegetable your family will love and want’s eat each day" />
                            <BlogDate color="black" name="Author" date="17. 6. 2020" />
                        </div>


                    </BlogItem>
                    <BlogItem size="large" >


                        <div className="blog__box">
                            <div className="blog__box-content">
                                <BlogTitle size="small" title="Prepare a simple and delicious breads" />
                                <BlogDate color="black" name="Author" date="17. 6. 2020" />
                            </div>
                            <BlogImg size="small" href={meo} />
                        </div>
                        <div className="blog__box">
                            <div className="blog__box-content">
                                <BlogTitle size="small" title="Salat is kinda good start to your morning routines" />
                                <BlogDate color="black" name="Author" date="17. 6. 2020" />
                            </div>
                            <BlogImg size="small" href={meo} />
                        </div>
                        <div className="blog__box">
                            <div className="blog__box-content">
                                <BlogTitle size="small" title="Prepare a simple and delicious breads" />
                                <BlogDate color="black" name="Author" date="17. 6. 2020" />
                            </div>
                            <BlogImg size="small" href={meo} />
                        </div>


                    </BlogItem>
                </div>
            </div>


        </section>



    )
}

