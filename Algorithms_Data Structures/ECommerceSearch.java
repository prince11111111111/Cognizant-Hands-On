import java.util.Arrays;

class Product implements Comparable<Product> {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public int compareTo(Product other) {
        return Integer.compare(this.productId, other.productId);
    }
}

public class ECommerceSearch {

    public static Product linearSearch(Product[] products, int searchId) {
        for (Product p : products) {
            if (p.productId == searchId) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int searchId) {
        int left = 0;
        int right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (products[mid].productId == searchId) {
                return products[mid];
            }
            if (products[mid].productId < searchId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(103, "Laptop", "Electronics"),
            new Product(101, "Smartphone", "Electronics"),
            new Product(105, "Headphones", "Accessories"),
            new Product(102, "Desk Chair", "Furniture"),
            new Product(104, "Monitor", "Electronics")
        };

        Product foundLinear = linearSearch(products, 105);
        if (foundLinear != null) {
            System.out.println(foundLinear.productName);
        }

        Arrays.sort(products);

        Product foundBinary = binarySearch(products, 105);
        if (foundBinary != null) {
            System.out.println(foundBinary.productName);
        }
    }
}
