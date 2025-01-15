# Music Player

This project is a simple music player web application that allows users to search for songs, filter songs by genre, create playlists, and switch between light and dark modes.

## Project Structure

```
index.html
script.js
style.css
```

###

index.html



The main HTML file that contains the structure of the music player application. It includes the following sections:

- Header with the title and dark mode switch.
- Main section with:
  - Song search and filter form.
  - List of all songs.
  - Current song details and controls.
  - Playlist creation and search form.
  - List of all playlists and current playlist.

###

script.js



The main JavaScript file that contains the logic for the music player application. It includes the following functionalities:

- JSON song list with song details.
- Variable declarations and DOM element selections.
- Event listeners for various user interactions:
  - Search input for songs.
  - Dark mode switch.
  - Filter dropdown for genres.
  - Previous and next buttons for song navigation.
  - Create playlist button.
  - Add song to playlist button.
  - Search input for playlists.
  - Remove song from playlist button.
- Functions for:
  - Displaying all songs.
  - Adding event listeners to song buttons.
  - Filtering songs by genre.
  - Selecting a song and updating the current song details.
  - Creating a new playlist.
  - Displaying songs of the selected playlist.
  - Searching for songs by name.
  - Filtering playlists by name.

###

style.css



The main CSS file that contains the styles for the music player application. It includes the following styles:

- Root variables for colors.
- Body and header styles.
- Styles for various elements such as forms, buttons, lists, and cards.
- Styles for dark mode and light mode.

## How to Use

1. Open index.html in a web browser.
2. Use the search input to search for songs by name.
3. Use the filter dropdown to filter songs by genre.
4. Click on a song to play it and view its details.
5. Use the previous and next buttons to navigate through the songs.
6. Use the dark mode switch to toggle between light and dark modes.
7. Create a new playlist by entering a name and clicking the "Create Playlist" button.
8. Add the current song to a playlist by clicking the "Add to Playlist" button.
9. Search for playlists by name using the search input.
10. Remove the current song from a playlist by clicking the "Remove From Playlist" button.

## Dependencies

- [Bootstrap](https://getbootstrap.com/) for styling and layout.
- [Font Awesome](https://fontawesome.com/) for icons.

## License

This project is licensed under the MIT License.
