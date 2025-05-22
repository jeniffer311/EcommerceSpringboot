package com.ecommerce.ecom.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.ecom.Model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
    
}
