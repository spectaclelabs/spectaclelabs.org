# Move all media to output/media
def pass_raw(config, page):
    if "raw" in page.meta and page.meta["raw"]:
        page.meta["content"] = page.original
        
    
