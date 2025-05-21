export default ({ thumbnail, videoID, autoplay, start, end, controls, loop }) => {
    const searchParams = new URLSearchParams();

    let url = 'https://www.youtube.com/embed/' + videoID + '?';

    if(autoplay)
        searchParams.append('autoplay', 1);

    if(start)
        searchParams.append('start', start);

    if(end) 
        searchParams.append('end', end);

    if(controls)
        searchParams.append('controls', 1);

    if(loop)
        searchParams.append('loop', 1);


    url += searchParams.toString();

    console.log(url);

    return (
        <>
            {thumbnail ? 
                <img src={thumbnail} alt="" />
            :
                <>
                    {
                        !videoID ?
                            <img src="https://picsum.photos/seed/picsum/500/300" alt="" />
                        :
                            <iframe width="560" height="315" src={url}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    }
                </>
            }
        </>
    )
}