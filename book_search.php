/* THIS FILE IS HOSTED ON THE SERVER
https://admin.muum.dev/book_search  */


<?php

function get_books($searchTerm)
{
    $NO_IMAGE = "https://via.placeholder.com/140x140";

    $url = "http://openlibrary.org/search.json?q=" . urlencode($searchTerm);
    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $response_data = json_decode($response, true);

    $books = array();

    for ($i = 0; $i < min(50, count($response_data['docs'])); $i++) {
        $book = $response_data['docs'][$i];

        $title = isset($book['title']) ? $book['title'] : "";
        $author = isset($book['author_name']) ? $book['author_name'][0] : "Unknown Author";
        $cover = isset($book['cover_i'])
            ? "http://covers.openlibrary.org/b/id/" . $book['cover_i'] . "-M.jpg"
            : $NO_IMAGE;
        $publish_year = isset($book['first_publish_year']) ? $book['first_publish_year'] : "N/A";

        array_push($books, array(
            "title" => $title,
            "author" => $author,
            "cover" => $cover,
            "publish_year" => $publish_year
        ));
    }

    return $books;
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');


$searchTerm = isset($_GET['searchTerm']) ? $_GET['searchTerm'] : '';
echo json_encode(get_books($searchTerm));
?>