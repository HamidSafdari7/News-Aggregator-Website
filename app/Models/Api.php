<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Helpers\Helper;
use Illuminate\Support\Arr;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7;

/**
 * Class Api
 * @package App
 */

class Api extends Model
{
    /**
     * @param $newsSource
     * @return mixed
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function fetchNewsFromSource($newsSource)
    {
        $urlParams = 'top-headlines?sources=' . $newsSource;
        $response = (new Helper)->makeApiCalls($urlParams);
        return Arr::get($response,'articles');
    }
    /**
     * @return mixed
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function getAllSources()
    {
        $urlParams = 'sources?';
        $response = (new Helper)->makeApiCalls($urlParams);
        return Arr::get($response,'sources');
    }
}
