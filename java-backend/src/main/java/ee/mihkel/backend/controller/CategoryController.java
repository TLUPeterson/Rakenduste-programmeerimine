package ee.mihkel.backend.controller;

import ee.mihkel.backend.model.Category;
import ee.mihkel.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("category")
    public List<Category> getCategories() {
        return categoryService.getCategories();
    }

    @PostMapping("category")

    public String postCategory(@RequestBody Category category) {

        categoryService.saveCategory(category);
        return "Kategooria lisatud  " + category.getCategory();
    }

    // tehke serverile restart
    // localhost:8080/items

    //delete item p2ring
    //edit item p2ring
    //view one item p2ring
    // andmebaas

    //Kodus kategooria osas
}
