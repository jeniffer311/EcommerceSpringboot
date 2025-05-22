package com.ecommerce.ecom.Controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ecommerce.ecom.Model.Product;
import com.ecommerce.ecom.Repository.ProductRepository;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @PostMapping
    public Product createProduct(@RequestParam("name") String name,
                                @RequestParam("description") String description,
                                @RequestParam("price") double price,
                                @RequestParam("img") MultipartFile file) throws IOException{
                                    Product product=new Product();                                
                                    product.setName(name);
                                    product.setDescription(description);
                                    product.setPrice(price);
                                    product.setImg(file.getBytes());
                                    return productRepository.save(product);
    }
    @GetMapping
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Product> getProductById(@PathVariable Long id){
        return productRepository.findById(id);
    }
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id,
                                @RequestParam("name") String name,
                                @RequestParam("description") String description,
                                @RequestParam("price") double price,
                                @RequestParam(value = "img", required = false) MultipartFile file) throws IOException{
                                    Product product=productRepository.findById(id).orElseThrow();
                                    product.setName(name);
                                    product.setDescription(description);
                                    product.setPrice(price);
                                    if(file!=null){
                                        product.setImg(file.getBytes());
                                    }
                                    return productRepository.save(product);
    }
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id){
        productRepository.deleteById(id);
    }
}
