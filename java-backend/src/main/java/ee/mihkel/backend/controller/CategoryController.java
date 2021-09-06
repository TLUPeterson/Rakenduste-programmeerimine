package ee.mihkel.backend.controller;

import ee.mihkel.backend.model.Category;
import ee.mihkel.backend.model.Item;
import ee.mihkel.backend.service.CategoryService;
import ee.mihkel.backend.service.ItemService;
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
    public List<Category> getItems() {
        return categoryService.getItems();
    }

    @PostMapping("category")

    public String postItem(@RequestBody Item item) {

        categoryService.saveCategory(category);
        return "Ese edukalt lisatud " + category.getName();
    }

    // tehke serverile restart
    // localhost:8080/items

    //delete item p2ring
    //edit item p2ring
    //view one item p2ring
    // andmebaas

    //Kodus kategooria osas
}
