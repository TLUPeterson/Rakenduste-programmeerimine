package ee.mihkel.backend.service;

import ee.mihkel.backend.model.Category;
import ee.mihkel.backend.model.Item;
import ee.mihkel.backend.repository.CategoryRepository;
import ee.mihkel.backend.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public List<Category> getItems(){
        return categoryRepository.findAll();
    }

    public void saveCategory(Category category) {

        categoryRepository.save(category);
    }
}

