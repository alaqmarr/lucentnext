import StoreTable from './StoreTable'
import { data as storeData } from './data'

export default function StorePage() {
    // Filter out unwanted fields from each product
    const filteredData = storeData.map(item => ({
        "Part. Nr.": item["Part. Nr."],
        "Description": item["Description"],
        "ProdFam 1": item["ProdFam 1"],
        "ProdFam 2": item["ProdFam 2"],
        "Make": item["Make"],
        "Product Group": item["Product Group"],
        "Weight KG": item["Weight KG"],
        "Origin": item["Origin"]
    }))

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: 'url(/assets/img/slider.jpg)' }}></div>
                <div className="container">
                    <div className="page-header__inner">
                        <h2>Store</h2>
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><span>/</span></li>
                            <li>Store</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Store Content */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1" style={{ marginBottom: '50px' }}>
                        <h2 className="section-title__title title-animation">
                            Product <span>Catalog</span>
                        </h2>
                        <p style={{ maxWidth: '700px', margin: '20px auto 0', color: '#666' }}>
                            Browse our extensive catalog of industrial components and spare parts.
                            Use the search bar to find specific products by part number, description, or manufacturer.
                        </p>
                    </div>

                    <StoreTable data={filteredData} />
                </div>
            </section>
        </>
    )
}
