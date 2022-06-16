// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1e001400010404040404040404040404040404040404040404040404040404040402050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906050909090909090909090909090909090909090909090909090909090906030808080808080808080808080808080808080808080808080808080807`, img`
222222222222222222222222222222
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.floorLight1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
