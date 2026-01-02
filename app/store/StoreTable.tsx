'use client'
import React, { useState, useMemo, useEffect } from 'react'

interface Product {
  "Part. Nr.": string;
  "Description": string;
  "Product Family": string;
  "Make": string;
  "List price": string;
  "Weight KG": number;
  "Origin": string;
  "Minimum order quantity": number;
}

const ITEMS_PER_PAGE = 50;

export default function StoreTable({ data }: { data: Product[] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Debounced search
  const [debouncedSearch, setDebouncedSearch] = useState('')

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm)
      setCurrentPage(1)
      setIsLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [searchTerm])

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!debouncedSearch.trim()) return data

    const searchLower = debouncedSearch.toLowerCase()
    return data.filter(item =>
      String(item["Part. Nr."] ?? '').toLowerCase().includes(searchLower) ||
      String(item["Description"] ?? '').toLowerCase().includes(searchLower) ||
      String(item["Product Family"] ?? '').toLowerCase().includes(searchLower) ||
      String(item["Make"] ?? '').toLowerCase().includes(searchLower) ||
      String(item["Origin"] ?? '').toLowerCase().includes(searchLower)
    )
  }, [data, debouncedSearch])

  // Pagination
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE)
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [filteredData, currentPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0 })
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxVisible = isMobile ? 3 : 5

    if (totalPages <= maxVisible + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push('...')

      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) pages.push(i)

      if (currentPage < totalPages - 2) pages.push('...')
      pages.push(totalPages)
    }
    return pages
  }

  const styles = `
    /* Disable Lenis smooth scroll on store page */
    html.lenis, html.lenis body {
      scroll-behavior: auto !important;
    }
    .lenis.lenis-smooth {
      scroll-behavior: auto !important;
    }
    
    .store-container { width: 100%; }
    
    .store-search-wrapper {
      margin-bottom: 30px;
    }
    
    .store-search-box {
      position: relative;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .store-search-input {
      padding: 15px 20px 15px 50px;
      font-size: 16px;
      border-radius: 10px;
      border: 2px solid #e0e0e0;
      width: 100%;
      transition: border-color 0.3s ease;
    }
    
    .store-search-input:focus {
      outline: none;
      border-color: #1a365d;
    }
    
    .store-search-icon {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      color: #888;
    }
    
    .store-results-count {
      text-align: center;
      margin-top: 15px;
      color: #666;
      font-size: 14px;
    }
    
    /* Desktop Table Styles */
    .store-table-wrapper {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    
    .store-table {
      width: 100%;
      background-color: #fff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      border-collapse: collapse;
    }
    
    .store-table thead {
      background-color: #1a365d;
      color: #fff;
    }
    
    .store-table th {
      padding: 15px 12px;
      font-weight: 600;
      white-space: nowrap;
      text-align: left;
    }
    
    .store-table td {
      padding: 12px;
      border-bottom: 1px solid #eee;
    }
    
    .store-table tbody tr:hover {
      background-color: #f8f9fa;
    }
    
    .store-table .part-nr {
      font-weight: 600;
      color: #1a365d;
    }
    
    .store-table .origin-badge {
      background-color: #e8f0fe;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
    }
    
    /* Mobile Card Styles */
    .store-cards {
      display: none;
    }
    
    @media (max-width: 767px) {
      .store-table-wrapper {
        display: none;
      }
      
      .store-cards {
        display: block;
      }
      
      .store-card {
        background: #fff;
        border-radius: 12px;
        padding: 16px;
        margin-bottom: 16px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        border-left: 4px solid #1a365d;
      }
      
      .store-card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 12px;
        flex-wrap: wrap;
        gap: 8px;
      }
      
      .store-card-part-nr {
        font-size: 16px;
        font-weight: 700;
        color: #1a365d;
      }
      
      .store-card-origin {
        background-color: #e8f0fe;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
      }
      
      .store-card-description {
        font-size: 14px;
        color: #333;
        margin-bottom: 12px;
        line-height: 1.4;
      }
      
      .store-card-details {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        font-size: 13px;
      }
      
      .store-card-detail {
        display: flex;
        flex-direction: column;
      }
      
      .store-card-label {
        color: #888;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .store-card-value {
        color: #333;
        font-weight: 500;
      }
      
      .store-search-input {
        padding: 12px 15px 12px 45px;
        font-size: 14px;
      }
      
      .store-search-icon {
        left: 15px;
      }
    }
    
    /* Pagination Styles */
    .store-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin-top: 30px;
      flex-wrap: wrap;
      padding: 0 10px;
    }
    
    .store-pagination-btn {
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s ease;
      background: #1a365d;
      color: #fff;
    }
    
    .store-pagination-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .store-pagination-num {
      padding: 10px 16px;
      border: 1px solid #ddd;
      background: #fff;
      color: #333;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 400;
      transition: all 0.2s ease;
    }
    
    .store-pagination-num.active {
      border: 2px solid #1a365d;
      background: #1a365d;
      color: #fff;
      font-weight: 600;
    }
    
    .store-pagination-ellipsis {
      padding: 10px 8px;
      color: #666;
    }
    
    @media (max-width: 480px) {
      .store-pagination {
        gap: 4px;
      }
      
      .store-pagination-btn {
        padding: 8px 12px;
        font-size: 13px;
      }
      
      .store-pagination-num {
        padding: 8px 12px;
        font-size: 13px;
      }
    }
    
    .store-empty {
      text-align: center;
      padding: 60px 20px;
      color: #666;
    }
    
    .store-empty-icon {
      font-size: 50px;
      margin-bottom: 15px;
      opacity: 0.3;
    }
  `

  return (
    <div className="store-container">
      <style>{styles}</style>

      {/* Search Bar */}
      <div className="store-search-wrapper">
        <div className="store-search-box">
          <input
            type="text"
            placeholder="Search by Part Nr, Description, Make..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control store-search-input"
          />
          <i className="fa fa-search store-search-icon"></i>
          {isLoading && (
            <span style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)' }}>
              <i className="fa fa-spinner fa-spin"></i>
            </span>
          )}
        </div>
        <div className="store-results-count">
          Showing {filteredData.length.toLocaleString()} of {data.length.toLocaleString()} products
          {totalPages > 1 && ` • Page ${currentPage} of ${totalPages.toLocaleString()}`}
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="store-table-wrapper">
        <table className="store-table">
          <thead>
            <tr>
              <th>Part Nr.</th>
              <th>Description</th>
              <th>Product Family</th>
              <th>Make</th>
              <th>List Price</th>
              <th>Weight (KG)</th>
              <th>Origin</th>
              <th>Min Order Qty</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <tr key={`${item["Part. Nr."]}-${index}`}>
                  <td className="part-nr">{item["Part. Nr."]}</td>
                  <td>{item["Description"]}</td>
                  <td>{item["Product Family"]}</td>
                  <td>{item["Make"]}</td>
                  <td>{item["List price"]}</td>
                  <td style={{ textAlign: 'right' }}>{item["Weight KG"]}</td>
                  <td style={{ textAlign: 'center' }}><span className="origin-badge">{item["Origin"]}</span></td>
                  <td style={{ textAlign: 'center' }}>{item["Minimum order quantity"]}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="store-empty">
                  <i className="fa fa-search store-empty-icon" style={{ display: 'block' }}></i>
                  No products found matching your search
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="store-cards">
        {paginatedData.length > 0 ? (
          paginatedData.map((item, index) => (
            <div key={`card-${item["Part. Nr."]}-${index}`} className="store-card">
              <div className="store-card-header">
                <span className="store-card-part-nr">{item["Part. Nr."]}</span>
                <span className="store-card-origin">{item["Origin"]}</span>
              </div>
              <div className="store-card-description">{item["Description"]}</div>
              <div className="store-card-details">
                <div className="store-card-detail">
                  <span className="store-card-label">Make</span>
                  <span className="store-card-value">{item["Make"]}</span>
                </div>
                <div className="store-card-detail">
                  <span className="store-card-label">Product Family</span>
                  <span className="store-card-value">{item["Product Family"]}</span>
                </div>
                <div className="store-card-detail">
                  <span className="store-card-label">List Price</span>
                  <span className="store-card-value">{item["List price"]}</span>
                </div>
                <div className="store-card-detail">
                  <span className="store-card-label">Weight</span>
                  <span className="store-card-value">{item["Weight KG"]} KG</span>
                </div>
                <div className="store-card-detail">
                  <span className="store-card-label">Min Order</span>
                  <span className="store-card-value">{item["Minimum order quantity"]}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="store-empty">
            <i className="fa fa-search store-empty-icon" style={{ display: 'block' }}></i>
            No products found matching your search
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="store-pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="store-pagination-btn"
          >
            <i className="fa fa-chevron-left"></i> {!isMobile && 'Prev'}
          </button>

          {getPageNumbers().map((page, idx) => (
            typeof page === 'number' ? (
              <button
                key={idx}
                onClick={() => handlePageChange(page)}
                className={`store-pagination-num ${currentPage === page ? 'active' : ''}`}
              >
                {page}
              </button>
            ) : (
              <span key={idx} className="store-pagination-ellipsis">...</span>
            )
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="store-pagination-btn"
          >
            {!isMobile && 'Next'} <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  )
}
