import React from "react"
import '../style.css'; 

function Faq () {
    return (
        <div className="cardFaq row mt-5" id="faq">
            <div className="sewa col-md-5 mt-3">
                <div>
                    <p className="textFaq">Frequently Asked Question</p>
                </div>
                <div>
                    <p className="textFaq1">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
            <div className="col-md-7">
                <div className="accordion" id="accordionFlushExample1">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne1">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne1">
                                <strong>Apa saja syarat yang dibutuhkan?</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseOne1" className="accordion-collapse collapse" aria-labelledby="flush-headingOne1" data-bs-parent="#accordionFlushExample1">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                </div>
                <div className="accordion mt-4" id="accordionFlushExample2">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne2">
                                <strong>Berapa hari minimal sewa mobil lepas kunci?</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseOne2" className="accordion-collapse collapse" aria-labelledby="flush-headingOne2" data-bs-parent="#accordionFlushExample2">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                </div>
                <div className="accordion mt-4" id="accordionFlushExample3">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne3">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne3" aria-expanded="false" aria-controls="flush-collapseOne3">
                                <strong>Berapa hari sebelumnya sabaiknya booking sewa mobil?</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseOne3" className="accordion-collapse collapse" aria-labelledby="flush-headingOne3" data-bs-parent="#accordionFlushExample3">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                </div>
                <div className="accordion mt-4" id="accordionFlushExample4">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne4">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne4" aria-expanded="false" aria-controls="flush-collapseOne4">
                                <strong>Apakah Ada biaya antar-jemput?</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseOne4" className="accordion-collapse collapse" aria-labelledby="flush-headingOne4" data-bs-parent="#accordionFlushExample4">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                </div>
                <div className="accordion mt-4" id="accordionFlushExample5">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne5">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne5" aria-expanded="false" aria-controls="flush-collapseOne5">
                                <strong>Bagaimana jika terjadi kecelakaan?</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseOne5" className="accordion-collapse collapse" aria-labelledby="flush-headingOne5" data-bs-parent="#accordionFlushExample5">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;